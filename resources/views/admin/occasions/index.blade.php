@extends('admin.layouts.app')
@section('content')
  <section class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-6">
        <h2>occasions List</h2>
      </div>
      <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
          <li class="breadcrumb-item"><a href="{{url('admin/dashboard')}}">Dashboard</a></li>
          <li class="breadcrumb-item active"><a href="{{url('admin/users')}}">User</a></li>
           <li class="breadcrumb-item active">occasions</li>
        </ol>
      </div>
    </div>
  </div><!-- /.container-fluid -->
</section>
<div class="container">
    <div class="row">
            <div class="col-lg-12">
                <p>User: {{$user->first_name}}</p>
                <p>Email: {{$user->email}}</p>
            </div>
        </div> 
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="table-responsive">
                        <input type="hidden" name="userid"  value="{{$user->id}}" id="user_id">
                        <table class="table table-bordered" id="occasions-responsive-datatable">
                            <thead>
                                 <tr>
                                    <th class="all" width="10%">Creator</th>
                                    <th class="all" width="10%">Occasions Name</th>
                                    <th class="all" width="10%">Celebrants</th>
                                    <th class="all" width="10%">Description</th>
                                    <th class="all" width="10%">Event Date</th>
                                    <th class="all" width="10%">Deadline</th>
                                    <th class="all" width="10%">Creation Date</th>
                                    <th class="all" width="25%">Action</th>
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
            /*Delete*/
            $('#users-responsive-datatable').on('click', '.delete', function(e) {
                e.preventDefault();
               var delete_url = $(this).data('href');
               swal({
                       title: "Are you sure?",
                       text: "You want to delete this Occasions!",
                       icon: "info",
                       buttons: true,
                       dangerMode: true,
                   })
                   .then((willDelete) => {
                       if (willDelete) {
                           $.ajax({
                               url: delete_url,
                               type: 'POST',
                               dataType: 'json',
                               data: {
                                   _method: 'DELETE',
                                   "_token": "{{ csrf_token() }}"
                               }
                           }).always(function(data) {
                               if (data.status == 'success') {
                                   swal("Occasions has been deleted successfully!", {
                                       icon: "success",
                                   });
                                   toastr.success(data.message)
                                    $('#users-responsive-datatable').load();
                               } else {
                                   toastr.error(data.message)
                                   swal("Occasions cannot be deleted, as it is used at somewhere!!", {
                                       icon: "error",
                                   });
                               }
                               window.location.reload();
                               $('#occasions-responsive-datatable').load();
                           });
                       }
                   });
            });
            /*User listing functionality in datatable code */
            var table = $('#occasions-responsive-datatable').DataTable({
            processing: true,
            serverSide: true,
            aaSorting: [],
            ajax: {
                url: "{{route('useroccasions.alloccasion')}}",
                type: 'GET',
                data: function (d) {
                    d.id = $('#user_id').val();                                                                                                 
                }
            },
            columns: [
                {data: 'user_id', name: 'user_id',defaultContent: "-"},
                {data: 'occasion_name', name: 'occasion_name',defaultContent: "-"},
                {data: 'celebrants', name: 'celebrants',defaultContent: "-"},
                {data: 'occasions_description', name: 'occasions_description',defaultContent: "-"},
                {data: 'occasion_date', name: 'occasion_date',defaultContent: "-"},
                {data: 'contribution_deadline_date', name: 'contribution_deadline_date',defaultContent: "-"},
                 {data: 'created_at', name: 'created_at',defaultContent: "-"},
                {data: 'action', name: 'action',bSortable:false, ordering: false},
            ]
        });
        });
    </script>
@endsection
