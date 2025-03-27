import { Message, HelloWorldMessage } from '../../domain/entities/Message';

export class MessageService {
    getMessage(): Message {
        return new HelloWorldMessage();
    }
} 