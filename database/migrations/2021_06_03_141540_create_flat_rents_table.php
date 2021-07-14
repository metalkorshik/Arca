<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFlatRentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flat_rents', function (Blueprint $table) {
            $table->id();

            $table->bigInteger('flat_id')->unsigned();
			$table->foreign('flat_id')
				->references('id')
				->on('flats')
				->onUpdate('cascade')
                ->onDelete('cascade');

            $table->bigInteger('contract_id')->unsigned();
            $table->foreign('contract_id')
                ->references('id')
                ->on('contracts')
                ->onUpdate('cascade')
                ->onDelete('cascade');

            $table->float('cost');
            $table->date('entrance');
            $table->date('leaving');

            $table->timestamps();
        });

        Schema::create('flat_costs', function (Blueprint $table) {
            $table->id();

            $table->bigInteger('flat_id')->unsigned();
			$table->foreign('flat_id')
				->references('id')
				->on('flats')
				->onUpdate('cascade')
                ->onDelete('cascade');

            $table->date('date');
            $table->float('cost');

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
        Schema::dropIfExists('flat_costs');
        Schema::dropIfExists('flat_rents');
    }
}
