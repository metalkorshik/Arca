<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $id = DB::table('users')->insertGetId([
            'fname' => 'root',
            'lname' => '',
            'mname' => '',
            'email' => 'vitaliktrach@gmail.com',
            'password' => Hash::make('12345678'),
            'role' => 'root'
        ]);

        DB::table('users_info')->insert([
            'user_id' => $id,
            'photo_path' => '1605089720.jpeg'
        ]);
    }
}
