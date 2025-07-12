const channelsContent = [
  {
    title: 'Channels Basics',
    examples: [
      {
        title: 'Simple channel',
        code: `package main

import (
    "fmt"
    "time"
)

func main() {
    // Create a channel for strings
    messageChannel := make(chan string)
    
    // Send a message in a goroutine
    go func() {
        messageChannel <- "Hello from goroutine!"
    }()
    
    // Receive the message in main
    message := <-messageChannel
    fmt.Println(message)
    
    fmt.Println("Main function ends")
}`
      },
      {
        title: 'Channel with multiple messages',
        code: `package main

import (
    "fmt"
    "time"
)

func sendMessages(ch chan string) {
    messages := []string{"Hello", "World", "from", "Go"}
    
    for _, msg := range messages {
        ch <- msg
        time.Sleep(100 * time.Millisecond)
    }
    
    // Close the channel when done
    close(ch)
}

func main() {
    // Create channel
    ch := make(chan string)
    
    // Start sender goroutine
    go sendMessages(ch)
    
    // Receive messages
    for message := range ch {
        fmt.Println("Received:", message)
    }
    
    fmt.Println("All messages received!")
}`
      }
    ]
  },
  {
    title: 'Buffered Channels',
    examples: [
      {
        title: 'Buffered channel example',
        code: `package main

import (
    "fmt"
    "time"
)

func main() {
    // Create a buffered channel (can hold 3 messages)
    ch := make(chan string, 3)
    
    // Send messages (won't block until buffer is full)
    ch <- "First message"
    ch <- "Second message"
    ch <- "Third message"
    
    fmt.Println("Sent 3 messages to buffered channel")
    
    // Receive messages
    fmt.Println("Receiving messages:")
    fmt.Println(<-ch)
    fmt.Println(<-ch)
    fmt.Println(<-ch)
    
    fmt.Println("All messages received!")
}`
      },
      {
        title: 'Select statement',
        code: `package main

import (
    "fmt"
    "time"
)

func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)
    
    // Send to first channel
    go func() {
        time.Sleep(1 * time.Second)
        ch1 <- "Message from channel 1"
    }()
    
    // Send to second channel
    go func() {
        time.Sleep(500 * time.Millisecond)
        ch2 <- "Message from channel 2"
    }()
    
    // Select waits for whichever channel is ready first
    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-ch1:
            fmt.Println("Received from ch1:", msg1)
        case msg2 := <-ch2:
            fmt.Println("Received from ch2:", msg2)
        case <-time.After(2 * time.Second):
            fmt.Println("Timeout!")
        }
    }
}`
      }
    ]
  }
];

export default channelsContent; 