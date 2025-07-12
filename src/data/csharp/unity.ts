const unityContent = [
  {
    title: 'Unity Basics',
    examples: [
      {
        title: 'Basic MonoBehaviour',
        code: `using UnityEngine;

public class PlayerController : MonoBehaviour
{
    [SerializeField] private float moveSpeed = 5f;
    [SerializeField] private float jumpForce = 10f;
    
    private Rigidbody rb;
    private bool isGrounded;
    
    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }
    
    void Update()
    {
        // Handle input
        float horizontalInput = Input.GetAxis("Horizontal");
        float verticalInput = Input.GetAxis("Vertical");
        
        // Move player
        Vector3 movement = new Vector3(horizontalInput, 0f, verticalInput);
        transform.Translate(movement * moveSpeed * Time.deltaTime);
        
        // Jump
        if (Input.GetKeyDown(KeyCode.Space) && isGrounded)
        {
            rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
        }
    }
    
    void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Ground"))
        {
            isGrounded = true;
        }
    }
    
    void OnCollisionExit(Collision collision)
    {
        if (collision.gameObject.CompareTag("Ground"))
        {
            isGrounded = false;
        }
    }
}`
      },
      {
        title: 'Coroutines and timing',
        code: `using UnityEngine;
using System.Collections;

public class GameManager : MonoBehaviour
{
    [SerializeField] private GameObject enemyPrefab;
    [SerializeField] private Transform spawnPoint;
    
    void Start()
    {
        StartCoroutine(SpawnEnemies());
    }
    
    IEnumerator SpawnEnemies()
    {
        while (true)
        {
            SpawnEnemy();
            yield return new WaitForSeconds(2f); // Wait 2 seconds
        }
    }
    
    void SpawnEnemy()
    {
        Instantiate(enemyPrefab, spawnPoint.position, spawnPoint.rotation);
    }
    
    // Coroutine with parameters
    IEnumerator FadeOut(SpriteRenderer sprite, float duration)
    {
        Color startColor = sprite.color;
        Color endColor = new Color(startColor.r, startColor.g, startColor.b, 0f);
        
        float elapsed = 0f;
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / duration;
            sprite.color = Color.Lerp(startColor, endColor, t);
            yield return null;
        }
        
        sprite.color = endColor;
    }
}`
      }
    ]
  },
  {
    title: 'Game Object Management',
    examples: [
      {
        title: 'Object pooling for performance',
        code: `using UnityEngine;
using System.Collections.Generic;

public class ObjectPool : MonoBehaviour
{
    [SerializeField] private GameObject prefab;
    [SerializeField] private int poolSize = 20;
    
    private List<GameObject> pool;
    
    void Start()
    {
        pool = new List<GameObject>();
        
        for (int i = 0; i < poolSize; i++)
        {
            GameObject obj = Instantiate(prefab);
            obj.SetActive(false);
            pool.Add(obj);
        }
    }
    
    public GameObject GetPooledObject()
    {
        for (int i = 0; i < pool.Count; i++)
        {
            if (!pool[i].activeInHierarchy)
            {
                pool[i].SetActive(true);
                return pool[i];
            }
        }
        
        // If no inactive objects, create a new one
        GameObject newObj = Instantiate(prefab);
        pool.Add(newObj);
        return newObj;
    }
    
    public void ReturnToPool(GameObject obj)
    {
        obj.SetActive(false);
    }
}

// Usage in another script
public class BulletSpawner : MonoBehaviour
{
    [SerializeField] private ObjectPool bulletPool;
    
    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            GameObject bullet = bulletPool.GetPooledObject();
            bullet.transform.position = transform.position;
            bullet.transform.rotation = transform.rotation;
        }
    }
}`
      },
      {
        title: 'Singleton pattern for managers',
        code: `using UnityEngine;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance { get; private set; }
    
    public int Score { get; private set; }
    public bool IsGamePaused { get; private set; }
    
    void Awake()
    {
        // Singleton pattern
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }
    }
    
    public void AddScore(int points)
    {
        Score += points;
        Debug.Log($"Score: {Score}");
    }
    
    public void PauseGame()
    {
        IsGamePaused = true;
        Time.timeScale = 0f;
    }
    
    public void ResumeGame()
    {
        IsGamePaused = false;
        Time.timeScale = 1f;
    }
}

// Usage in other scripts
public class Player : MonoBehaviour
{
    void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Coin"))
        {
            GameManager.Instance.AddScore(10);
            Destroy(other.gameObject);
        }
    }
}`
      }
    ]
  }
];

export default unityContent; 