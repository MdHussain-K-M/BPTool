using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BPTool
{
    public class Startup
    {        
        public static string ConnectionStringTS { get; set; }
        public static string Excel03ConString { get; set; }
        public static string Excel07ConString { get; set; }
        public static string DevConnectionString { get; set; }
        
       
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;           
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRazorPages().AddRazorRuntimeCompilation(); 
            services.AddMvc();
            services.AddControllersWithViews();
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                ConnectionStringTS = Configuration.GetConnectionString("DevConnectionString");
                Excel03ConString = Configuration.GetConnectionString("DevConnectionString");
                Excel07ConString = Configuration.GetConnectionString("DevConnectionString");
                DevConnectionString = Configuration.GetConnectionString("DevConnectionString");
            }
            else
            {
                ConnectionStringTS = Configuration.GetConnectionString("ConnectionStringTS");
                Excel03ConString = Configuration.GetConnectionString("Excel03ConString");
                Excel07ConString = Configuration.GetConnectionString("Excel07ConString");
                DevConnectionString = Configuration.GetConnectionString("DevConnectionString");

                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
               
            }
            app.UseHttpsRedirection();

            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();
          
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
