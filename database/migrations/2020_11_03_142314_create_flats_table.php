<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFlatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flats', function (Blueprint $table) {
            $table->id();
            $table->string('address', 100);
            $table->float('cost');
            $table->timestamps();
        });

        Schema::create('flat_lodgers', function (Blueprint $table) {
            $table->id();

            $table->bigInteger('flat_id')->unsigned();
			$table->foreign('flat_id')
				->references('id')
				->on('flats')
				->onUpdate('cascade')
                ->onDelete('cascade');

            $table->bigInteger('lodger_id')->unsigned();
            $table->foreign('lodger_id')
                ->references('id')
                ->on('users')
                ->onUpdate('cascade')
                ->onDelete('cascade');

            $table->date('entrance');
            $table->date('leaving');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('flats');
        Schema::dropIfExists('flat_lodgers');
    }
}
