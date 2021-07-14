<?php

use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([[
            'role' => 'accountant',
            'can_auth' => '1',
            'title' => 'Бухгалтер'
        ], [
            'role' => 'adjuster',
            'can_auth' => '0',
            'title' => 'Монтажник'
        ], [
            'role' => 'admin',
            'can_auth' => '1',
            'title' => 'Администратор'
        ], [
            'role' => 'electrician',
            'can_auth' => '0',
            'title' => 'Электромонтажник'
        ], [
            'role' => 'engineer',
            'can_auth' => '1',
            'title' => 'Инженер'
        ], [
            'role' => 'hs_specialis',
            'can_auth' => '1',
            'title' => 'Специалист по ОТ и ТБ'
        ], [
            'role' => 'planner',
            'can_auth' => '1',
            'title' => 'Проектировщик'
        ], [
            'role' => 'root',
            'can_auth' => '1',
            'title' => null
        ], [
            'role' => 'welder',
            'can_auth' => '0',
            'title' => 'Сварщик'
        ]]);
    }
}
