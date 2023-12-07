<div class="row">
    <div class="col-md-12">
        <div class="card card-secondary">
            <div class="card-header">
                <h3 class="card-title">Montage Information</h3>
            </div><!-- card header -->
            <div class="card-body">
                <div class="row">
                   @forelse ($greetMedia as $value)
                        <div class="col-sm-6 final">
                            <video width="400" controls>
                              <source src="{{$value->media_path}}" >
                            </video>
                        </div>
                    @empty
                    @endforelse
                </div>
            </div>
        </div>
    </div>
</div>