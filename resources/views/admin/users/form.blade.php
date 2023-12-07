<div class="row">
    <div class="col-md-12">
        <div class="card card-secondary">
            <div class="card-header">
                <h3 class="card-title">User Information</h3>
            </div><!-- card header -->
            <div class="card-body">
                <div class="row">
                    <div class="col-md-9">
                        <div class="form-group row">
                            <label for="name" class="col-sm-3 col-form-label">First Name<span class="text-danger">*</span></label>
                            <div class="col-sm-9">
                               <input type="text" name="first_name" class="form-control @error('first_name') is-invalid @enderror"id="first_name" value="{{ isset($user->first_name) ? $user->first_name : old('first_name') }}" placeholder="First Name" >
                                @error('first_name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div><!--  First Name -->

                <div class="row">
                    <div class="col-md-9">
                        <div class="form-group row">
                            <label for="name" class="col-sm-3 col-form-label">Last Name<span class="text-danger">*</span></label>
                            <div class="col-sm-9">
                               <input type="text" name="last_name" class="form-control @error('last_name') is-invalid @enderror"id="last_name" value="{{ isset($user->last_name) ? $user->last_name : old('last_name') }}" placeholder="Last Name" >
                                @error('last_name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div><!--  Last  Name -->

                <div class="row">
                    <div class="col-md-9">
                        <div class="form-group row">
                            <label for="email" class="col-sm-3 col-form-label">Email<span class="text-danger">*</span></label>
                            <div class="col-sm-9">
                               <input type="text" name="email" class="form-control @error('email') is-invalid @enderror"id="email" value="{{ isset($user->email) ? $user->email : old('email') }}" placeholder="Email" >
                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div><!--  Email -->

                <div class="row">
                    <div class="col-md-9">
                        <div class="form-group row">
                            <label for="password" class="col-sm-3 col-form-label">Password<span class="text-danger">*</span></label>
                            <div class="col-sm-9">
                               <input type="password" name="password" class="form-control @error('password') is-invalid @enderror"id="password" placeholder="Password" >
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div><!--  password -->

                <div class="row">
                    <div class="col-md-9">
                        <div class="form-group row">
                            <label for="password-confirm" class="col-sm-3 col-form-label">Password Confirm<span class="text-danger">*</span></label>
                            <div class="col-sm-9">
                               <input type="password" name="password-confirm" class="form-control @error('password-confirm') is-invalid @enderror"id="password-confirm" placeholder="Password Confirm" >
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div><!--  password Confirm -->

                <div class="row">
                    <div class="col-md-9">
                        <div class="form-group row">
                            <label for="contact" class="col-sm-3 col-form-label">Contact<span class="text-danger">*</span></label>
                            <div class="col-sm-9">
                               <input type="text" name="contact" class="form-control @error('contact') is-invalid @enderror"id="contact" value="{{ isset($user->contact) ? $user->contact : old('contact') }}" placeholder="contact" >
                                @error('contact')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div><!--  Contact -->

                <div class="row">
                    <div class="col-md-9">
                        <div class="form-group row">
                            <label for="user_image" class="col-sm-3 col-form-label">Image<span class="text-danger">*</span></label>
                            <div class="col-sm-7">
                                <input  type="file" class="form-control  @error('profile_image') is-invalid @enderror" name="user_image" id="file"  accept="image/*"
                                value={{ isset($user->profile_image) ? $user->profile_image : '' }}>
                                @error('user_image')
                                  <span class="invalid-feedback" role="alert">
                                      <strong>{{ $message }}</strong>
                                  </span>
                                @enderror
                            </div>
                            @if(isset($user->profile_image))
                                @if (Storage::disk('user_image')->exists($user->profile_image) && !empty($user->profile_image))
                                    <div class="col-sm-2">
                                        <img class="img-fluid" src="{{asset('/storage/user_image/'.$user->profile_image)}}" style="max-width:100px;max-height:100px" alt="User picture">   
                                    </div>
                                @endif
                            @endif
                         </div>
                    </div>
                </div><!--User Image -->

                <!-- submit -->
                <div class="col-md-12">
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