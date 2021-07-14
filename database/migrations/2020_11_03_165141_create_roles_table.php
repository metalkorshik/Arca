<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->string('role', 15);
            $table->smallInteger('can_auth')->unsigned()->default(0);
            $table->string('title')->nullable()->default(null);

            $table->primary('role');
        });

        Schema::table('users', function (Blueprint $table) {
            $table->string('role')->after('remember_token');
            $table->foreign('role')
                ->references('role')
                ->on('roles')
                ->onUpdate('cascade')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign('users_role_foreign');
            $table->dropColumn(['role']);
        });
        Schema::dropIfExists('roles');
    }
}
