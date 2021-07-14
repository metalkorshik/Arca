<?php

use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('settings')->insert([[
            'key' => 'expired_document',
            'value' => '10',
		], [
            'key' => 'empty_timesheet',
            'value' => '1',
        ]]);
    }
}
