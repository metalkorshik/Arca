<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersInfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_info', function (Blueprint $table) {
            $table->id();

            $table->bigInteger('user_id')->unsigned();
			$table->foreign('user_id')
				->references('id')
				->on('users')
				->onUpdate('cascade')
                ->onDelete('cascade');

            $table->date('birthday')->nullable()->default(null);
            $table->string('passport_seria', 4)->nullable()->default(null);
            $table->string('passport_number', 6)->nullable()->default(null);
            $table->integer('height')->nullable()->default(null);
            $table->string('photo_path', 50);
            $table->string('shoe_size', 5)->nullable()->default(null);
            $table->string('clothing_size', 5)->nullable()->default(null);
            $table->timestamps();
        });

        Schema::create('users_contacts', function (Blueprint $table) {
            $table->id();

            $table->bigInteger('user_id')->unsigned();
			$table->foreign('user_id')
				->references('id')
				->on('users')
				->onUpdate('cascade')
                ->onDelete('cascade');

            $table->string('type', 15)->default('phone');
            $table->string('value', 20);
        });

        Schema::create('users_documents', function (Blueprint $table) {
            $table->id();

            $table->bigInteger('user_id')->unsigned();
			$table->foreign('user_id')
				->references('id')
				->on('users')
				->onUpdate('cascade')
                ->onDelete('cascade');

            $table->string('title', 50);
            $table->string('path', 50);
            $table->date('validity');
            $table->date('date_of_issue');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_info');
        Schema::dropIfExists('users_contacts');
        Schema::dropIfExists('users_documents');
    }
}
