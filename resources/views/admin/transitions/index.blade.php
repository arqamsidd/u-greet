@extends('admin.layouts.app')
@section('content')
<section class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-6">
        <h2>Transitions List</h2>
      </div>
      <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="{{url('admin/dashboard')}}">Dashboard</a></li>
            <li class="breadcrumb-item active">Transitions</li>
        </ol>
      </div>
    </div>
  </div>
</section>
<div class="container">
    <div class="row">
        <div class="col-lg-12 d-flex justify-content-end p-2">
            <a class="btn btn-primary pull-left" href="{{ url('admin/transitions/create') }}">Add New</a>
        </div>
        <div class="col-12">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="transition-responsive-datatable">
                                    <thead>
                                        <tr>
                                            <th class="all" width="40%">Name</th>
                                            <th class="all" width="40%">Transition</th>
                                            <th class="all" width="30%">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
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
            $('#transition-responsive-datatable').on('click', '.delete', function(e) {
                e.preventDefault();
               var delete_url = $(this).data('href');
               swal({
                       title: "Are you sure?",
                       text: "You want to delete this Transition!",
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
                                   swal("Transition has been deleted successfully!", {
                                       icon: "success",
                                   });
                                   toastr.success(data.message)
                                     
                               } else {
                                   toastr.error(data.message)
                                   swal("Transition cannot be deleted, as it is used at somewhere!!", {
                                       icon: "error",
                                   });
                               }
                               window.location.reload();
                           });
                       }
                   });
            });

            /*transition listing functionality in datatable*/
            var table = $('#transition-responsive-datatable').DataTable({
                responsive: true,
                autoWidth:true,
                pageLength: 50,
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                order: [[0, 'ASC']],
                ajax: "{{ url('admin/transitions') }}",
                columns: [
                    /*{data: 'DT_RowIndex', name: 'DT_RowIndex'},*/
                    {data: 'name', name: 'name'},
                    {data: 'transition', name: 'transition'},
                    {data: 'action', name: 'action', orderable: false, searchable: false},
                ],
            });
        });
    </script>
@endsection
