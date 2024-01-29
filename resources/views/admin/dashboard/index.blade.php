@extends('admin.layouts.app')
@section('content')
<div class="container">
    <div class="row ">
        <div class="col-md-12">
            <div class="row">
                <div class="col">
                    <div class="info-box mb-3">
                            <span class="info-box-icon bg-info elevation-1"><i class="fas fa-users"></i></span>
                        <div class="info-box-content">
                            <span class="info-box-text">Users</span>
                            <span class="info-box-number">{{App\Models\User::all()->count()}}</span>
                        </div>

                    </div>

                </div>


                <div class="col">
                    <div class="info-box mb-3">
                        <span class="info-box-icon bg-primary elevation-1"><i class="fas fa-list"></i></span>
                        <div class="info-box-content">
                            <span class="info-box-text">Total Greed</span>
                            <span class="info-box-number">{{App\Models\GreetMedia::all()->count()}}</span>
                        </div>

                    </div>

                </div>

                <div class="col">
                    <div class="info-box mb-3">
                    <span class="info-box-icon bg-success elevation-1"><i class="fas fa-thumbs-up"></i></span>
                        <div class="info-box-content">
                            <span class="info-box-text">Total Payment</span>
                            <span class="info-box-number">{{App\Models\PaymentTransaction::all()->count()}}</span>
                        </div>

                    </div>

                </div>

            </div>
        </div>
        <div class="card col-md-12 p-3 ">
            <div class="card-box">
                <table id="dashboard_list-responsive-datatable" class="table table-striped table-responsive">
                    <thead>
                        <tr>
                            <th class="all" width="5%">Id</th>
                            <th class="all" width="10%">User Name</th>
                            <th class="all" width="10%">Email</th>
                            <th class="all" width="10%">Greet Media</th>
                            <th class="all" width="15%">Payment</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
@section('script')
    <script type="text/javascript">
        $(document).ready(function() {
            
            /*dashboard listing functionality in datatable code */
            var table = $('#dashboard_list-responsive-datatable').DataTable({
                responsive: true,
                select: false,
                processing: true,
                serverSide: true,
                autoWidth:false,
                pageLength: 50,
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                order: [[0, 'DESC']],
                ajax: "{{ url('admin/dashboard') }}",
                columns: [
                    /*{data: 'DT_RowIndex', name: 'DT_RowIndex'},*/
                    {data: 'DT_RowIndex', name: 'DT_RowIndex'},
                    {data: 'user_id', name: 'user_id'},
                    {data: 'email', name: 'email'},
                    {data: 'greet_media', name: 'greet_media'},
                    {data: 'payment', name: 'payment'},                
                ],
            });
        });
    </script>
@endsection