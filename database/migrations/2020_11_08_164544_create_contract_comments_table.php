<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContractCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contract_comments', function (Blueprint $table) {
            $table->id();

            $table->bigInteger('contract_id')->unsigned()->nullable();
			$table->foreign('contract_id')
				->references('id')
				->on('contracts')
				->onUpdate('cascade')
                ->onDelete('cascade');

            $table->text('content');

            $table->bigInteger('author_id')->unsigned()->nullable();
			$table->foreign('author_id')
				->references('id')
				->on('users')
				->onUpdate('set null')
                ->onDelete('set null');

            $table->bigInteger('parent_id')->unsigned()->nullable();
            $table->foreign('parent_id')
                ->references('id')
                ->on('contract_comments')
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
        Schema::dropIfExists('contract_comments');
    }
}
