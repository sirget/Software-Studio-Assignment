using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using ToolBooking.Data;
using ToolBooking.Models;

namespace ToolBooking.Controllers
{
    public class BlacklistsController : Controller
    {
        private readonly ToolBookingContext _context;

        public BlacklistsController(ToolBookingContext context)
        {
            _context = context;
        }

        // GET: Blacklists
        public async Task<IActionResult> Index()
        {
            return View(await _context.Blacklists.ToListAsync());
        }

        // GET: Blacklists/Details/5
        public async Task<IActionResult> Details(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var blacklist = await _context.Blacklists
                .FirstOrDefaultAsync(m => m.UserID == id);
            if (blacklist == null)
            {
                return NotFound();
            }

            return View(blacklist);
        }

        // GET: Blacklists/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Blacklists/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("UserID")] Blacklist blacklist)
        {
            if (ModelState.IsValid)
            {
                _context.Add(blacklist);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(blacklist);
        }

        // GET: Blacklists/Edit/5
        public async Task<IActionResult> Edit(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var blacklist = await _context.Blacklists.FindAsync(id);
            if (blacklist == null)
            {
                return NotFound();
            }
            return View(blacklist);
        }

        // POST: Blacklists/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(string id, [Bind("UserID")] Blacklist blacklist)
        {
            if (id != blacklist.UserID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(blacklist);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!BlacklistExists(blacklist.UserID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(blacklist);
        }

        // GET: Blacklists/Delete/5
        public async Task<IActionResult> Delete(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var blacklist = await _context.Blacklists
                .FirstOrDefaultAsync(m => m.UserID == id);
            if (blacklist == null)
            {
                return NotFound();
            }

            return View(blacklist);
        }

        // POST: Blacklists/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {
            var blacklist = await _context.Blacklists.FindAsync(id);
            _context.Blacklists.Remove(blacklist);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool BlacklistExists(string id)
        {
            return _context.Blacklists.Any(e => e.UserID == id);
        }
    }
}
