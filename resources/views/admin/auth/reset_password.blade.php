@extends('admin.layouts.auth')
@section('title')
    Forgot Password
@stop

@section('content')
    <div class="authentication admin">
        <div class="right mobile">
            <img src="{{ asset('assets/auth/js/authentication.a3a12619.svg') }}" alt="background">
        </div>
        <div class="left">
            <div class="container">
                <div class="content">
                    <div class="head">
                        <div class="font-26 bold head">Admin Panel Forgot Password</div>
                    </div>
                    {!! Form::open(array('url' => '/admin/'.$email.'/reset-password', 'id' =>'form_sample_3', 'class' => 'login-form' ) ) !!}


                    @if($errors->first('email'))
                        <div class="alert alert-danger">
                            <button class="close" data-close="alert"></button>
                            <span> {{ $errors->first('email') }} </span>
                        </div>
                    @endif
                    @if($errors->first('success'))
                        <div class="alert alert-success">
                            <button class="close" data-close="alert"></button>
                            <span> {{ $errors->first('success') }} </span>
                        </div>
                    @endif

                    <div class="item">
                        <div class="text-input full-input">
                            <div class="label bold">
                                <div>New Password</div>
                            </div>
                            <input type="password" name="password" required="" class="bg-2 bg-2-fx" value="">
                            <div></div>
                        </div>
                    </div>


                    <div class="item">
                        <div class="text-input full-input">
                            <div class="label bold">
                                <div>Confirm Password</div>
                            </div>
                            <input type="password" name="confirm_password" id="confirm_password" required="" class="bg-2 bg-2-fx" value="">
                            <div></div>
                        </div>
                    </div>

                    <div class="item">
                        <button type="submit" class="bg-3 bold button-item" >
                            Reset Password
                        </button>
                    </div>

                    {!! Form::close() !!}

                </div>
            </div>
        </div>
        <div class="right desktop admin">
            <div class="content">
                <div class="head">
                    <a href="/">
                        <img
                            src="data:image/png;base64,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"
                            alt="logo" class="admin-logo">
                    </a>

                </div>
            </div>
            <img src="{{ asset('assets/auth/js/login-visual-1.svg') }}" alt="background">
        </div>
    </div>
@stop
