<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMediaThumbColumnToGreetMediaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('greet_media', function (Blueprint $table) {
            $table->string('media_thumb_name')->after('greet_media_type')->nullable();
            $table->string('media_thumb')->after('media_thumb_name')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('greet_media', function (Blueprint $table) {
            $table->dropColumn('media_thumb_name');
            $table->dropColumn('media_thumb');
        });
    }
}
