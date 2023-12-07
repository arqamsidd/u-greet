<div class="row">
    <div class="col-md-12">
        <div class="card card-secondary">
            <div class="card-header">
                <h3 class="card-title">Transition Information</h3>
            </div><!-- card header -->
            <div class="card-body">
                <div class="row">
                    <div class="col-md-9">
                        <div class="form-group row">
                            <label for="transition_original_name" class="col-sm-3 col-form-label">Name<span class="text-danger">*</span></label>
                            <div class="col-sm-9">
                                <input type="text" name="transition_original_name" class="form-control @error('transition_original_name') is-invalid @enderror" 
                                    id="transition_original_name" 
                                    value="{{ isset($transition->name) ? $transition->name : '' }}" 
                                    placeholder="Transition Name"
                                >
                                @error('transition_original_name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-9">
                        <div class="form-group row">
                            <label for="transition_file" class="col-sm-3 col-form-label">File<span class="text-danger">*</span></label>
                            <div class="col-sm-7">
                                <input  type="file" onchange="transitionPreview(this)" class="form-control  @error('transition_file') is-invalid @enderror" name="transition_file" value="{{ isset($transition->transition_name) ? $transition->transition_name : '' }}" id="transition_file" >
                                @error('transition_file')
                                  <span class="invalid-feedback" role="alert">
                                      <strong>{{ $message }}</strong>
                                  </span>
                                @enderror
                            </div>
                         </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-9">
                        <div class="form-group row">
                            <div class="col-sm-3"></div>
                            <div class="col-sm-2">
                                <img width="150" 
                                     height="100" 
                                     src="{{(isset($transition->transition_name) && 
                                            Storage::disk('transitions')->exists($transition->transition_name) && 
                                            !empty($transition->transition_name) ? asset($transition->transition_path) : '')}}" 
                                     id="transition_preview"
                                >
                            </div>
                         </div>
                    </div>
                </div>

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