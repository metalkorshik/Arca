<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateColorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_notes_colors', function (Blueprint $table) {
            $table->string('color', 7)->primary();
        });

        DB::table('user_notes_colors')->insert([
            [
                'color' => '#fef7b2'
            ],
            [
                'color' => '#88f1ff'
            ],
            [
                'color' => '#83ff83'
            ],
            [
                'color' => '#fdb1b2'
            ],
            [
                'color' => '#9cb8fb'
            ],
            [
                'color' => '#dbdbdb'
            ]
        ]);

        Schema::table('user_notes', function (Blueprint $table) {
            $table->string('color', 7)->default('#fef7b2')->after('content');

            $table->foreign('color')
                ->references('color')
                ->on('user_notes_colors')
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
        Schema::table('user_notes', function (Blueprint $table) {
            $table->dropForeign('user_notes_color_foreign');
            $table->dropColumn('color');
        });
        Schema::dropIfExists('user_notes_colors');
    }
}
