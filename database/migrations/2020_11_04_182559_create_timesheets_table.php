<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTimesheetsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('timesheets', function (Blueprint $table) {
			$table->id();

			$table->bigInteger('contract_id')->unsigned();
			$table->foreign('contract_id')
				->references('id')
				->on('contracts')
				->onUpdate('cascade')
				->onDelete('cascade');
		});

		Schema::create('timesheets_data', function (Blueprint $table) {
			$table->id();

			$table->bigInteger('timesheet_id')->unsigned();
			$table->foreign('timesheet_id')
				->references('id')
				->on('timesheets')
				->onUpdate('cascade')
				->onDelete('cascade');

			$table->bigInteger('worker_id')->unsigned();
			$table->foreign('worker_id')
				->references('id')
				->on('users')
				->onUpdate('cascade')
				->onDelete('cascade');

			$table->date('date');
			$table->integer('hourse')->unsigned();
			$table->string('comment', 100)->nullable()->default(null);
			$table->float('business')->nullable()->default(null)
				->comment('командировочные');

			$table->float('premium')->default(0)->comment('премия');
			$table->float('retention')->default(0)->comment('удержание');
			$table->float('salary')->default(0)->comment('зарплата');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('timesheets');
		Schema::dropIfExists('timesheets_data');
	}
}
