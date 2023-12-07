@extends('admin.layouts.app')

@section('title')
    {{$breadcrumb['page_title']}}
@stop

@section('content')
    <div class="card-box">
        <div class="row">
            <div class="col-12">
                <table class="table">
                    <tr>
                        <th>First Name</th>
                        <td>{{$user->first_name}}</td>
                    </tr>
                    <tr>
                        <th>Last Name</th>
                        <td>{{$user->last_name}}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{{$user->email}}</td>
                    </tr>
                    <tr>
                        <th>Contact</th>
                        <td>{{$user->contact}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
@endsection
