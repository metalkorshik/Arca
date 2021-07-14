<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContractsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contracts', function (Blueprint $table) {
            $table->id();
            $table->string('legal_entity', 20);
            $table->string('title', 70);
            $table->string('offer_number', 40);
            $table->string('version', 2);
            $table->string('customer_fname', 20);
            $table->string('customer_lname', 20);
            $table->string('customer_mname', 20);
            $table->string('phone', 16);
            $table->string('email', 30)->nullable()->default(null);
            $table->date('date');
            $table->string('comment', 100);
            $table->integer('status')->unsigned()->default(0)
                ->comment('0 - commerical, 1 - contract, 2 - close');

            $table->bigInteger('author_id')->unsigned()->nullable();
			$table->foreign('author_id')
				->references('id')
				->on('users')
				->onUpdate('set null')
                ->onDelete('set null');

            $table->timestamps();
        });

        Schema::create('contract_staff', function (Blueprint $table) {
            $table->id();

            $table->bigInteger('contract_id')->unsigned()->nullable()->default(null);
			$table->foreign('contract_id')
				->references('id')
				->on('contracts')
				->onUpdate('cascade')
                ->onDelete('cascade');

            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onUpdate('cascade')
                ->onDelete('cascade');

            $table->float('business')->nullable()->default(null)
                ->comment('командировочные');

            $table->string('type', 20)->comment('worker|engineer|planner');

            $table->timestamps();
		});

        Schema::create('contract_costs', function (Blueprint $table) {
			$table->id();
			$table->string('title', 30);
			$table->float('sum');

            $table->bigInteger('contract_id')->unsigned()->nullable()->default(null);
			$table->foreign('contract_id')
				->references('id')
				->on('contracts')
				->onUpdate('cascade')
                ->onDelete('cascade');

			$table->bigInteger('author_id')->unsigned();
			$table->foreign('author_id')
				->references('id')
				->on('users')
				->onUpdate('cascade')
				->onDelete('cascade');

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
		Schema::dropIfExists('contracts');
		Schema::dropIfExists('contract_staff');
		Schema::dropIfExists('contract_costs');
    }
}
