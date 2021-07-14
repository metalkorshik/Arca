<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreatePaymentHistoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment_history', function (Blueprint $table) {
            $table->id();

            $table->bigInteger('user_id')->unsigned();
			$table->foreign('user_id')
				->references('id')
				->on('users')
				->onUpdate('cascade')
                ->onDelete('cascade');

            $table->string('type', 15);
            $table->datetime('date', 0)->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->float('sum');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payment_history');
    }
}
