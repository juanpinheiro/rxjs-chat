import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { SERVER_URL } from '../constants';

class ChatService {
    private url: string = SERVER_URL;
    private socket: any;

    constructor() {
        this.socket = io(this.url);
    }

    public sendMessage(message: string) {
        this.socket.emit('new-message', message);
    }

    public getMessages = () => {
        return Observable.create((observer: any) => {
            this.socket.on('new-message', (message: string) => {
                observer.next(message);
            });
        });
    }
}

// tslint:disable-next-line:variable-name
export const ChatServiceFactory = () => new ChatService();

export const chatService = ChatServiceFactory();
