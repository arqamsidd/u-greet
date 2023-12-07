<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGreetMediaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('greet_media', function (Blueprint $table) {
            $table->id();
            $table->integer('greet_id');
            $table->integer('user_id')->comment('Uploaded By')->nullable();
            $table->integer('order')->nullable();
            $table->string('media_name')->nullable();
            $table->string('media_type')->nullable();
            $table->string('media_path')->nullable();
            $table->string('greet_media_type')->nullable();
            $table->tinyInteger('status')->default(true);
            $table->softDeletes();
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
        Schema::dropIfExists('greet_media');
    }
}
