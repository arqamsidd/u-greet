@extends('admin.layouts.app')
@section('content')
<section class="content-header">
     <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-6">
        <h2>Edit Transition</h2>
      </div>
      <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
          <li class="breadcrumb-item"><a href="{{url('admin/dashboard')}}">Dashboard</a></li>
          <li class="breadcrumb-item active"><a href="{{route('transitions.index')}}">Music</a></li>
        </ol>
      </div>
    </div>
  </div><!-- /.container-fluid -->
</section>
<div class="content">
    <div class="container-fluid">
        <form class="form-horizontal" method="POST" enctype="multipart/form-data"
            action="{{ route('transitions.update', $transition->id) }}" id="musicsinsert">
            @csrf
            @method('put')
            @include('admin.transitions.form')
        </form>
    </div><!-- /.container-fluid -->
</div><!-- /.content -->
@endsection