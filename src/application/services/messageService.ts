import { IMessageService } from '../../domain/services/MessageService';
import { StaticMessageService } from '../../infrastructure/services/StaticMessageService';

export class MessageService {
    private static instance: MessageService;
    private messageService: IMessageService;

    private constructor() {
        this.messageService = new StaticMessageService();
    }

    public static getInstance(): MessageService {
        if (!MessageService.instance) {
            MessageService.instance = new MessageService();
        }
        return MessageService.instance;
    }

    public getMessage() {
        return this.messageService.getMessage();
    }
} 