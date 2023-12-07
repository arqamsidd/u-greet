@extends('admin.layouts.app')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h2>Create Transition</h2>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{url('admin/dashboard')}}">Dashboard</a></li>
                    <li class="breadcrumb-item active"><a href="{{route('transitions.index')}}">Transitions</a></li>
                </ol>
            </div>
        </div>
    </div>
</section>
<div class="content">
    <div class="container-fluid">
        <form class="form-horizontal" method="POST" enctype="multipart/form-data" action="{{route('transitions.store')}}" id="transition_insert">
            @csrf
            @method('Post')
            @include('admin.transitions.form')
        </form>
    </div>
</div>
@endsection
@section('script')
    <script type="text/javascript">
        $(document).ready(function() {
            $("#transition_preview").css("display", "none");
        })
        function transitionPreview(input) {
            $("#transition_preview").css("display", "block");
            if (input.files && input.files[0]) {
                let reader = new FileReader();
                reader.onload = function(e) {
                    $("#transition_preview").attr("src", e.target.result);
                };
                reader.readAsDataURL(input.files[0]);
            }
        }
    </script>
@endsection