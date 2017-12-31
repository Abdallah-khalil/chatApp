import { WebSocketGateway, WebSocketServer, OnGatewayConnection, SubscribeMessage } from '@nestjs/websockets';

@WebSocketGateway(81)
export class MessageGateway implements OnGatewayConnection {
    @WebSocketServer() server;

    handleConnection(socket) {
        console.log("New Connection has been added");
    }

    @SubscribeMessage('message')
    handleChatMessage(sender, data) {
        
    }
}