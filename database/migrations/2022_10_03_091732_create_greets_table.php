<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGreetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('greets', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->string('occasion_name');
            $table->date('occasion_date')->nullable();
            $table->string('occasions_description')->nullable();
            $table->date('contribution_deadline_date')->nullable();
            $table->integer('theme_id')->nullable();
            $table->integer('music_id')->nullable();
            $table->string('occasion_type')->nullable();
            $table->integer('occasion_limit')->nullable()->default('30')->comment('Occation limit should be in Seconds');
            $table->string('greet_img')->nullable();
            $table->string('greet_img_link')->nullable();
            $table->tinyInteger('status')->nullable()->default(0)->comment('0:Pending | 1:In Progress | 2:Complete | 3:Disabled');
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
        Schema::dropIfExists('greets');
    }
}
