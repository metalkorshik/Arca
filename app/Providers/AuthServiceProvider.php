<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Settings' => 'App\Policies\SettingsPolicy',
        'App\Contract' => 'App\Policies\ContractPolicy',
        'App\ContractCost' => 'App\Policies\ContractCostPolicy',
        'App\Flat' => 'App\Policies\FlatPolicy',
        'App\User' => 'App\Policies\StaffPolicy',
        'App\Timesheet' => 'App\Policies\TimesheetPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
    }
}
