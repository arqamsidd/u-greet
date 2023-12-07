<?php

namespace App\Events;

use App\Models\Greet;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class CreateVideo
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $greetId;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($greetId)
    {
        $this->greetId = $greetId;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
