<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        \DB::table('admins')->truncate();
        \DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        \DB::table('admins')->insert([
            'first_name' => 'Sagar',
            'last_name' => 'Upadhyay',
            'email' => 'sagarupadhyay@webtechsystem.com',
            'password' => Hash::make('Sagar@123'),
            'status' => 1,
        ]);
    }
}
