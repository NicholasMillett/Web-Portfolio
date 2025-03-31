import { Message } from '../../domain/models/Message';
import { IMessageService } from '../../domain/services/MessageService';

export class StaticMessageService implements IMessageService {
    getMessage(): Message {
        return {
            content: "Hello World"
        };
    }
} 