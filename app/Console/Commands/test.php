<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;

class test extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        //

        for ($x = 0; $x <= 10000; $x++) {
            
            User::factory()->create([
                'name' => "Test User $x",
                'email' => "test$x@example.com",
            ]);
          }
    }
}
