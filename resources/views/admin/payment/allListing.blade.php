@extends('admin.layouts.app')
@section('content')
<section class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-6">
        <h2>Payment List</h2>
      </div>
      <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
           <li class="breadcrumb-item"><a href="{{url('admin/dashboard')}}">Dashboard</a></li>
            <li class="breadcrumb-item active">Payment</li>
        </ol>
      </div>
    </div>
  </div><!-- /.container-fluid -->
</section>
<div class="container">
   <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="payment-responsive-datatable">
                            <thead>
                                 <tr>
                                    <th class="all" width="20%">Paid By</th>
                                    <th class="all" width="20%">Montage</th>
                                    <th class="all" width="30%">Reference</th>
                                    <th class="all" width="30%">Description</th>
                                    <th class="all" width="30%">Amount</th>
                                    <th class="all" width="30%">Gateway</th>
                                    <th class="all" width="30%">Status</th>
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
            /*Payment listing functionality in datatable code */
            var table = $('#payment-responsive-datatable').DataTable({
                responsive: true,
                // select: false,
                // processing: true,
                // serverSide: true,
                autoWidth:true,
                pageLength: 50,
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                order: [[0, 'ASC']],
                ajax: "{{ url('admin/payment') }}",
                columns: [
                    /*{data: 'DT_RowIndex', name: 'DT_RowIndex'},*/
                    {data: 'user_id', name: 'user_id',defaultContent: "-"},
                    {data: 'montage', name: 'montage',defaultContent: "-"},
                    {data: 'invoice_id', name: 'invoice_id',defaultContent: "-"},
                    {data: 'description', name: 'description',defaultContent: "-"},
                    {data: 'payment_amount', name: 'payment_amount',defaultContent: "-"},
                    {data: 'payment_gateway', name: 'payment_gateway',defaultContent: "-"},
                    {data: 'payment_status', name: 'payment_status',defaultContent: "-"},
                    {data: 'created_at', name: 'created_at'},
                ],
            });
        });

    </script>
@endsection
