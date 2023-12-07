@extends('admin.layouts.app')
@section('content')
  <section class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-6">
        <h2>User List</h2>
      </div>
      <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
          <li class="breadcrumb-item"><a href="{{url('admin/dashboard')}}">Dashboard</a></li>
          <li class="breadcrumb-item active">User</li>
        </ol>
      </div>
    </div>
  </div><!-- /.container-fluid -->
</section>
<div class="container">
    {{-- <div class="row">
            <div class="col-lg-12 d-flex justify-content-end p-2">
                <a class="btn btn-primary pull-left" href="{{ url('admin/themes/create') }}">Add New</a>
            </div>
        </div> --}}
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="users-responsive-datatable">
                            <thead>
                                 <tr>
                                    <th class="all" width="15%">Avatar</th>
                                    <th class="all" width="10%">Name</th>
                                    <th class="all" width="20%">Email</th>
                                    <th class="all" width="5%">Mobile</th>
                                    <th class="all" width="10%">Registration Date</th>
                                    <th class="all" width="10%">Occassions</th>
                                    <th class="all" width="15%">Action</th>
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
                       text: "You want to delete this User!",
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
                                   swal("User has been deleted successfully!", {
                                       icon: "success",
                                   });
                                   toastr.success(data.message)
                                    $('#users-responsive-datatable').load();
                               } else {
                                   toastr.error(data.message)
                                   swal("User cannot be deleted, as it is used at somewhere!!", {
                                       icon: "error",
                                   });
                               }
                               window.location.reload();
                               $('#users-responsive-datatable').load();
                           });
                       }
                   });
            });
            /*User listing functionality in datatable code */
            var table = $('#users-responsive-datatable').DataTable({
                responsive: true,
                select: false,
                processing: true,
                serverSide: true,
                autoWidth:false,
                pageLength: 50,
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                order: [[0, 'ASC']],
                ajax: "{{ url('admin/users') }}",
                columns: [
                    /*{data: 'DT_RowIndex', name: 'DT_RowIndex'},*/
                    {data: 'profile_image', name: 'profile_image',orderable: false, searchable: false},
                    {data: 'first_name', name: 'first_name'},
                    {data: 'email', name: 'email'},
                    {data: 'contact', name: 'contact'},
                    {data: 'created_at', name: 'created_at'},
                    {data: 'occassions', name: 'occassions'},
                    {data: 'action', name: 'action', orderable: false, searchable: false},
                ],
            });
        });
    </script>
@endsection
