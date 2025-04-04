import { Message } from '../models/Message';

export interface IMessageService {
    getMessage(): Message;
} 