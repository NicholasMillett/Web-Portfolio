export interface Message {
    content: string;
}

export class HelloWorldMessage implements Message {
    content: string = "Hello World";
} 