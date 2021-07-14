<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('roles')->insert([
            [
                'role' => 'main_accountant',
                'can_auth' => '1',
                'title' => 'Главный Бухгалтер'
            ]
        ]);

        Schema::table('roles', function (Blueprint $table) {
            $table->tinyInteger('sort_position')->default(0)->after('role');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::table('roles')->findOrFail('main_accountant')->delete();

        Schema::table('roles', function (Blueprint $table) {
            $table->dropColumn('sort_position');
        });
    }
}
