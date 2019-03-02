<?php

namespace App\Http\Controllers;

use App\Events\MessageCreated;
use App\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MessagesController extends Controller
{
    public function index()
    {
        return Message::with('user')->get();
    }

    public function create(Request $request)
    {
        $user = Auth::user();

        $message = $user->messages()->create([
            'message' => $request->get('message')
        ]);

        broadcast(new MessageCreated($message))->toOthers();

        return response()->json($message);
    }
}
