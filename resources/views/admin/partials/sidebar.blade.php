<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="/" class="brand-link">
      <img src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">Ugreet</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">{{ \Illuminate\Support\Facades\Auth::guard('admins')->user()->first_name }}</a>
        </div>
          <div class="info float-right" id="" style="flex-grow: 1; text-align: right;">
              <a href="{{ route('admin.logout') }}" class="d-block" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                  <i class="fa fa-power-off" aria-hidden="true"></i>
              </a>
              <form id="logout-form" action="{{ route('admin.logout') }}" method="GET" class="d-none">
                  @csrf
              </form>
          </div>
      </div>

      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div><div class="sidebar-search-results"><div class="list-group"><a href="#" class="list-group-item"><div class="search-title"><strong class="text-light"></strong>N<strong class="text-light"></strong>o<strong class="text-light"></strong> <strong class="text-light"></strong>e<strong class="text-light"></strong>l<strong class="text-light"></strong>e<strong class="text-light"></strong>m<strong class="text-light"></strong>e<strong class="text-light"></strong>n<strong class="text-light"></strong>t<strong class="text-light"></strong> <strong class="text-light"></strong>f<strong class="text-light"></strong>o<strong class="text-light"></strong>u<strong class="text-light"></strong>n<strong class="text-light"></strong>d<strong class="text-light"></strong>!<strong class="text-light"></strong></div><div class="search-path"></div></a></div></div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->

          <li class="nav-item">
            <a href="/admin" class="nav-link">
              <i class="nav-icon fas fa-home"></i>
              <p>
                Home
              </p>
            </a>
          </li>
          <li class="nav-item">
              <a href="/admin/users" class="nav-link">
                  <i class="nav-icon fas fa-users"></i>
                  <p>
                      Users
                  </p>
              </a>
          </li>
          <li class="nav-item">
              <a href="/admin/themes" class="nav-link">
                 <i class="fab fa-affiliatetheme nav-icon"></i>

                  <p>
                      Themes
                  </p>
              </a>
          </li>
          <li class="nav-item">
              <a href="/admin/musics" class="nav-link">
                  <i class="fas fa-music nav-icon"></i>
                  <p>
                      Music
                  </p>
              </a>
          </li>
          <li class="nav-item">
              <a href="/admin/transitions" class="nav-link">
                  <i class="fas fa-vector-square nav-icon" aria-hidden="true"></i>
                  <p>
                      Transition
                  </p>
              </a>
          </li>
            <li class="nav-item">
              <a href="/admin/payment" class="nav-link">
                  <i class="fas fa-history nav-icon" aria-hidden="true"></i>
                  <p>
                      Payment
                  </p>
              </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
