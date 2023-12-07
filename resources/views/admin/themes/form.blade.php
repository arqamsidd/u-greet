<div class="row">
    <div class="col-md-12">
        <div class="card card-secondary">
            <div class="card-header">
                <h3 class="card-title">Theme Information</h3>
            </div><!-- card header -->
            <div class="card-body">
                <div class="row">
                    <div class="col-md-9">
                        <div class="form-group row">
                            <label for="name" class="col-sm-3 col-form-label">Name<span class="text-danger">*</span></label>
                            <div class="col-sm-9">
                               <input type="text" name="theme_name" class="form-control @error('theme_name') is-invalid @enderror" id="theme_name" value="{{ isset($theme->name) ? $theme->name : old('theme_name') }}" placeholder="Theme Name">
                                @error('theme_name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div><!--  Name -->

                <div class="row">
                    <div class="col-md-9">
                        <div class="form-group row">
                            <label for="theme_image" class="col-sm-3 col-form-label">Image<span class="text-danger">*</span></label>
                            <div class="col-sm-7">
                                <input  type="file" class="form-control  @error('theme_image') is-invalid @enderror" name="theme_image" id="file"  accept="image/*"
                                value={{ isset($theme->file_name) ? $theme->file_name : '' }}>
                                @error('theme_image')
                                  <span class="invalid-feedback" role="alert">
                                      <strong>{{ $message }}</strong>
                                  </span>
                                @enderror
                            </div>
                         </div>
                    </div>
                </div><!--theme Image -->
                <div class="row">
                    <div class="col-md-9">
                        <div class="form-group row">
                            <div class="col-sm-3">
                            </div>
                            @if(isset($theme->file_name))
                                @if (Storage::disk('theme_image')->exists($theme->file_name) && !empty($theme->file_name))
                                    <div class="col-sm-2">
                                        <img class="img-fluid" src="{{asset('/storage/theme_image/'.$theme->file_name)}}" style="max-width:100px;max-height:100px" alt="Theme picture">
                                       
                                    </div>
                                @endif
                            @endif
                         </div>
                    </div>
                </div><!--theme Image -->

                <!-- submit -->
                <div class="col-md-12 d-flex justify-content-end">
                    <div class="form-group row">
                        <div class="col-sm-9 text-right">
                            <button type="submit" class="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>