@extends('admin.layouts.app')
@section('title')
   Meet Team
@endsection
@section('content')
<section class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-6">
        <h2>Montage</h2>
      </div>
      <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
          <li class="breadcrumb-item"><a href="{url('admin/dashboard')}}">Dashboard</a></li>
          <li class="breadcrumb-item active"><a href="{{url('admin/users')}}">User</a></li>
          <li class="breadcrumb-item active"><a href="{{route('occasions.alloccasions',$greet->user_id)}}">Occasions</a></li>
          <li class="breadcrumb-item active">Montage</li>
        </ol>
      </div>
    </div>
  </div><!-- /.container-fluid -->
</section>

<div class="content">
  <div class="container-fluid ">
     <div class="row">
          <div class="col-lg-12">
              <p>Occasion Name: {{$greet->occasion_name}}</p>

              <p>Celebrants: @foreach($greet->greetCelebrant as $value)
                    {{$value['first_name']}}
                @endforeach </p>
              
          </div>
      </div> 
    @include('admin.greetmedia.video')      
  </div><!-- container-fluid -->
</div><!-- /.content -->
@endsection
@section('footer_scripts')
<script type="text/javascript">
  @if ($message = Session::get('success'))
      toastr.success('{{ $message }}')
  @endif

  @if ($message = Session::get('error'))
      toastr.error('{{ $message }}')
  @endif
</script>
@endsection