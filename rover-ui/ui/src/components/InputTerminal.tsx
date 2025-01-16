import React, { useState } from 'react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const commands = ['Hamiz', 'Herbert', 'Luana', 'Omar', 'Conner'];

const InputTerminal: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const trimmedInput = input.trim();
      if (commands.includes(trimmedInput)) {
        runFakeCommand(trimmedInput);
      } else {
        setOutput('Invalid command or keyword. Try again.');
      }
    }
  };

  const runFakeCommand = (command: string) => {
    // Actual commands will go here
    const commands: Record<string, string> = {
      Hamiz: 'Listening to Hamiz yap...',
      Herbert: 'Edging to Herbert...',
      Luana: 'Loading Portugal contents...',
      Omar: 'Initializing the goat...',
      Conner: 'Helping the freshman cs majors...',
    };

    setOutput(commands[command] || 'Unknown command.');
  };

  const getHighlightedText = (text: string): JSX.Element[] => {
    const words = text.split(' ');

    return words.map((word, index) => {
      const isKeyword = commands.includes(word);
      return (
        <span
          key={index}
          style={{
            color: isKeyword ? 'blue' : 'black',
            fontWeight: isKeyword ? 'bold' : 'normal',
          }}
        >
          {word}
          {index < words.length - 1 && ' '}
        </span>
      );
    });
  };
  return (
    <Card className="h-full w-full">
            <CardHeader>
              <CardTitle>Terminal</CardTitle>
            </CardHeader>
            <CardContent>
            <div>
              <h1>Terminal</h1>
              <input
                type="text"
                value={input}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Type a keyword and press Enter..."
                style={{
                  borderWidth: '3px',
                  borderColor: '#00000F',
                  borderStyle: 'solid', 
                  padding: '10px', 
                  fontSize: '16px',
                  borderRadius: '4px',
                  outline: 'none',
                  textAlign: 'center',
                }}
              />
              <p>Your input: {getHighlightedText(input)}</p>
              <p>
                <strong style = {{textAlign: 'center'}} >Output:</strong>
                <br></br>
                {output}
              </p>
            </div>
            </CardContent>
            <CardFooter>
      
            </CardFooter>
        </Card>
  );
};

export default InputTerminal;
