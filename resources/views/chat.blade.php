@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <chat-users :joined-users="joinedUsers"></chat-users>
                <chat-log :messages="messages" :user="user"></chat-log>
                <chat-composer v-on:send-message="sendMessage" :user="user"></chat-composer>
            </div>
        </div>
    </div>
@endsection