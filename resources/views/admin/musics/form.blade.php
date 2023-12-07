<div class="row">
    <div class="col-md-12">
        <div class="card card-secondary">
            <div class="card-header">
                <h3 class="card-title">Music Information</h3>
            </div><!-- card header -->
            <div class="card-body">
                <div class="row">
                    <div class="col-md-9">
                        <div class="form-group row">
                            <label for="name" class="col-sm-3 col-form-label">Name<span class="text-danger">*</span></label>
                            <div class="col-sm-9">
                               <input type="text" name="music_name" class="form-control @error('music_name') is-invalid @enderror" id="music_name" value="{{ isset($music->name) ? $music->name : old('music_name') }}" placeholder="Music Name">
                                @error('music_name')
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
                            <label for="music_audio" class="col-sm-3 col-form-label">Music Audio<span class="text-danger">*</span></label>
                            <div class="col-sm-7">
                                <input  type="file" class="form-control  @error('music_audio') is-invalid @enderror" name="music_audio" id="file"  accept="audio/*"
                                value={{ isset($music->file_name) ? $music->file_name : '' }}>
                                @error('music_audio')
                                  <span class="invalid-feedback" role="alert">
                                      <strong>{{ $message }}</strong>
                                  </span>
                                @enderror
                            </div>
                         </div>
                    </div>
                </div><!--Music Audio -->
                <div class="row">
                    <div class="col-md-9">
                        <div class="form-group row">
                            <div class="col-sm-3">
                            </div>
                            @if(isset($music->file_name))
                                @if (Storage::disk('music_audio')->exists($music->file_name) && !empty($music->file_name))
                                    <div class="col-sm-2">
                                        <audio controls>
                                          <source src="{{asset('/storage/music_audio/'.$music->file_name)}}" type="audio/{{$music->file_type}}">
                                          Your browser does not support the audio element.
                                        </audio>
                                    </div>
                                @endif
                            @endif
                         </div>
                    </div>
                </div><!--Music Audio -->

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