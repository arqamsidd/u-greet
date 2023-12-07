@extends('admin.layouts.app')
@section('content')
<section class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-6">
        <h2>Upload List</h2>
      </div>
      <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
          <li class="breadcrumb-item"><a href="{{url('admin/dashboard')}}">Dashboard</a></li>
          <li class="breadcrumb-item active"><a href="{{url('admin/users')}}">User</a></li>
          <li class="breadcrumb-item active"><a href="{{route('occasions.alloccasions',$greet->user_id)}}">Occasions</a></li>
          <li class="breadcrumb-item active">Upload</li>
        </ol>
      </div>
    </div>
  </div><!-- /.container-fluid -->
</section>
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <p>Occasion Name: {{$greet->occasion_name}}</p>
            <p>Celebrants:
                @foreach($greet->greetCelebrant as $value)
                    {{$value['first_name']}}
                @endforeach
            </p>
        </div>
    </div>
   <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="table-responsive">
                        <input type="hidden" name="greet_id"  value="{{$greet->id}}" id="greet_id">
                        <table class="table table-bordered" id="upload-responsive-datatable">
                            <thead>
                                 <tr>
                                    <th class="all" width="40%">Uploaded By</th>
                                    <th class="all" width="40%">Email</th>
                                    <th class="all" width="30%">Order</th>
                                    <th class="all" width="30%">Media</th>
                                    <th class="all" width="30%">Creation Date</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table><!-- authorlist -->
                    </div><!-- table-responsive -->
                </div><!-- card-body -->
            </div><!-- card -->
        </div>
    </div><!-- row -->
</div><!-- container -->
<!-- Model -->
  <div class="modal fade" id="uploadView">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Overview</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <p>Mime Type: <span id="mimetype"></span></p>
                @if(isset($value))
                    <img  width="100%" height="100%"  id="overview_image">
                    <video width="100%" height="100%"  controls id="overview_id">
                      <source src="{{asset($value->media_path)}}" >
                    </video>
                @endif
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->
@endsection

@section('script')
    <script type="text/javascript">
        $(document).ready(function() {
            @if ($message = Session::get('success'))
               toastr.success('{{ $message }}')
            @endif

            @if ($message = Session::get('error'))
               toastr.error('{{ $message }}')
            @endif
            $.ajaxSetup({
               headers: {
               'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
               }
            });
            $(document).on("click",".alloveriew",function() {
                var modal = $('#uploadView');
                if($(this).data('mimetype') == 'image'){
                    modal.find('#overview_id').hide();
                    modal.find('#overview_image').show();
                    modal.find('#overview_image').attr('src',$(this).data('id'));
                } else {
                    modal.find('#overview_image').hide();
                     modal.find('#overview_id').show();
                    modal.find('#overview_id').attr('src',$(this).data('id'));
                }
                modal.find('#mimetype').text($(this).data('mimetype'));
                modal.show();
            });
            /*musics listing functionality in datatable code */
            var table = $('#upload-responsive-datatable').DataTable({
                responsive: true,
                // select: false,
                // processing: true,
                // serverSide: true,
                autoWidth:true,
                pageLength: 50,
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                order: [[0, 'ASC']],
                ajax: {
                url: "{{ route('useroccasions.allUploads') }}",
                    type: 'GET',
                    data: function (d) {
                        d.id = $('#greet_id').val();
                    }
                },

                columns: [
                    /*{data: 'DT_RowIndex', name: 'DT_RowIndex'},*/
                    {data: 'user_id', name: 'user_id',defaultContent: "-"},
                    {data: 'email', name: 'email',defaultContent: "-"},
                    {data: 'order', name: 'order',defaultContent: "-"},
                    {data: 'media', name: 'media',defaultContent: "-"},
                    {data: 'created_at', name: 'created_at'},
                ],
            });
        });

    </script>
@endsection

<style type="text/css">
    .modal.fade:not(.show){
        opacity: unset;
    }
</style>
