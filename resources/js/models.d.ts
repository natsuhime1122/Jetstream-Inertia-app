/**
 * This file is auto generated using 'php artisan typescript:generate'
 *
 * Changes to this file will be lost when the command is run again
 */

declare namespace App.Models.Base {
    export interface FailedJob {
        id: number;
        uuid: string;
        connection: string;
        queue: string;
        payload: string;
        exception: string;
        failed_at: string;
    }

    export interface PasswordReset {
        email: string;
        token: string;
        created_at: string | null;
    }

    export interface PersonalAccessToken {
        id: number;
        tokenable_type: string;
        tokenable_id: number;
        name: string;
        token: string;
        abilities: string | null;
        last_used_at: string | null;
        expires_at: string | null;
        created_at: string | null;
        updated_at: string | null;
    }

    export interface Session {
        id: string;
        user_id: number | null;
        ip_address: string | null;
        user_agent: string | null;
        payload: string;
        last_activity: number;
    }

    export interface User {
        id: number;
        name: string;
        email: string;
        email_verified_at: string | null;
        password: string;
        remember_token: string | null;
        current_team_id: number | null;
        profile_photo_path: string | null;
        created_at: string | null;
        updated_at: string | null;
        two_factor_secret: string | null;
        two_factor_recovery_codes: string | null;
        two_factor_confirmed_at: string | null;
    }

    export interface FailedJob {
        id: number;
        uuid: string;
        connection: string;
        queue: string;
        payload: string;
        exception: string;
        failed_at: string;
    }

    export interface PasswordReset {
        email: string;
        token: string;
        created_at: string | null;
    }

    export interface PersonalAccessToken {
        id: number;
        tokenable_type: string;
        tokenable_id: number;
        name: string;
        token: string;
        abilities: string | null;
        last_used_at: string | null;
        expires_at: string | null;
        created_at: string | null;
        updated_at: string | null;
    }

    export interface Session {
        id: string;
        user_id: number | null;
        ip_address: string | null;
        user_agent: string | null;
        payload: string;
        last_activity: number;
    }

    export interface User {
        id: number;
        name: string;
        email: string;
        email_verified_at: string | null;
        password: string;
        remember_token: string | null;
        current_team_id: number | null;
        profile_photo_path: string | null;
        created_at: string | null;
        updated_at: string | null;
        two_factor_secret: string | null;
        two_factor_recovery_codes: string | null;
        two_factor_confirmed_at: string | null;
    }

}

declare namespace App.Models {
    export interface FailedJob {
        id: number;
        uuid: string;
        connection: string;
        queue: string;
        payload: string;
        exception: string;
        failed_at: string;
    }

    export interface PasswordReset {
        email: string;
        token: string;
        created_at: string | null;
    }

    export interface PersonalAccessToken {
        id: number;
        tokenable_type: string;
        tokenable_id: number;
        name: string;
        token: string;
        abilities: string | null;
        last_used_at: string | null;
        expires_at: string | null;
        created_at: string | null;
        updated_at: string | null;
    }

    export interface Session {
        id: string;
        user_id: number | null;
        ip_address: string | null;
        user_agent: string | null;
        payload: string;
        last_activity: number;
    }

    export interface User {
        id: number;
        name: string;
        email: string;
        email_verified_at: string | null;
        password: string;
        remember_token: string | null;
        current_team_id: number | null;
        profile_photo_path: string | null;
        created_at: string | null;
        updated_at: string | null;
        two_factor_secret: string | null;
        two_factor_recovery_codes: string | null;
        two_factor_confirmed_at: string | null;
        readonly profile_photo_url?: any;
    }

}
