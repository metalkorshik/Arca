<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContractCostDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contract_cost_details', function (Blueprint $table) {
            $table->id();

            $table->bigInteger('contract_cost_id')->unsigned();
			$table->foreign('contract_cost_id')
				->references('id')
				->on('contract_costs')
				->onUpdate('cascade')
                ->onDelete('cascade');

            $table->date('date');
            $table->float('sum');
            $table->string('account_number', 50);
            $table->string('counterparty', 50);
            $table->string('nomenclature', 50);

            $table->bigInteger('author_id')->unsigned()->nullable()->default(null);
			$table->foreign('author_id')
				->references('id')
				->on('users')
				->onUpdate('set null')
                ->onDelete('set null');

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
        Schema::dropIfExists('contract_cost_details');
    }
}
