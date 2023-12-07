<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMediaSecAndMediaMinColumnToGreetMediaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('greet_media', function (Blueprint $table) {
            $table->string('media_sec')->nullable()->after('media_thumb');
            $table->string('media_min')->nullable()->after('media_sec');
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
            $table->dropColumn('media_sec');
            $table->dropColumn('media_min');
        });
    }
}
